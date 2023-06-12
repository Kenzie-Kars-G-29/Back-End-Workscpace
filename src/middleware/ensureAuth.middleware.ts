import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import 'dotenv/config'

const ensureAuthMidlleware = (request: Request, response: Response, next: NextFunction): Response | void => {
    let token = request.headers.authorization

    if(!token){
        return response.status(401).json({
            message: "Token is required"
        })
    }

    token = token.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {
        if(error){
            return response.status(401).json({
                message: "Invalid Token"
            })
        }

        response.locals.userId = decoded.sub

        return next()
    })


}

export default ensureAuthMidlleware