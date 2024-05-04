import { Request, Response } from "express";
import { ObjectService } from "../services/object.service";


export class ObjectController{
    create(request: Request, response: Response){
        const objectService = new ObjectService();

        const object = objectService.create(request.body);

        return response.status(201).json(object);
    }

    getMany(request: Request, response: Response){
        
        const objectService = new ObjectService();

        const objects = objectService.getMany(request.query.search as string);

        return response.status(200).json(objects);
    }

    getOne(request: Request, response: Response){
        const objectService = new ObjectService();
             
        const object = objectService.getOne(Number(request.params.id));

        return response.status(200).json(object);
    }

    update(request: Request, response: Response){
        const objectService = new ObjectService();

        const object = objectService.update(Number(request.params.id), request.body);

        return response.status(200).json(object);
    }

    remove(request: Request, response: Response){
        const objectService = new ObjectService();

        const message = objectService.delete(Number(request.params.id));

        return response.status(200).json(message);
        
    }
}