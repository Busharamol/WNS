import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { Users } from "./Entities/Users"
import { Banners } from "./Entities/Banner"
import { Category } from "./Entities/Category";
import { Addproduct } from "./Entities/Addproduct";
import { Orders } from "./Entities/Order";
import { OrderDetails } from "./Entities/OrderDetails";

const main = async () => {
    await createConnection({
        type: "mysql",
        database: "admin",
        username: "root",
        password: "",
        logging: false,
        synchronize: false,
        entities: [Users, Banners, Category, Addproduct, Orders, OrderDetails]
    });
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }))
    app.listen(3001, () => {
        console.log("SERVER RUNNING ON PORT 3001");
    });
}
main().catch((err) => {
    console.log(err);
});
