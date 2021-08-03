import "reflect-metadata"
import * as express from "express"
import { Request, Response } from "express"
import { createConnection } from "typeorm"
import { Uf } from "./entity/Uf"

createConnection().then(connection => {
    console.log("Startando o serviço de back-end...")
    let app = express()
    app.use(express.json())
    app.get("/estados", async function (req: Request, res: Response) {
        let uf = await connection.manager.createQueryBuilder(Uf, "uf").where("uf.iduf >= 1").orderBy("uf.sigla", "ASC").cache(true).getMany();
        res.json(uf)
    })
    app.get("/estados/:iduf", async function (req: Request, res: Response) {
        let uf = await connection.manager.findOne(Uf, req.params.iduf)
        return res.json(uf)
    })

    

    app.listen(3000)

}).catch(error => console.log(error))
