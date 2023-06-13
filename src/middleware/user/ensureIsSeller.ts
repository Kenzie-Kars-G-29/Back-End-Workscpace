import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import 'dotenv/config'

const ensureIsSellerMiddleware = (request: Request, response: Response, next: NextFunction): Response | void => {
    let token = request.headers.authorization

    token = token!.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {
        if(decoded.isSeller == false){
            return response.status(401).json({
                message: "This user is not Seller"
            })
        }

        return next()
    })


}

export default ensureIsSellerMiddleware