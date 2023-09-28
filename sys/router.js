const Express = require('express');
const ExpressRouter = Express.Router();
const routes = require('../application/config/routes.js');


const routesObject = { ...routes };

for (let key in routesObject) {
    try {
        const path = key;
        const handlerPath = routesObject[key][0];
        const splittedString = handlerPath.split('/');
        const httpMethod = routesObject[key][1];
        const className = splittedString[0].charAt(0).toUpperCase() + splittedString[0].slice(1);
        const controllerClass = require(`../application/mvc/controllers/${className}`);
        
        if (splittedString.length > 1) {
            const callback = controllerClass[`${splittedString[1]}`];
            switch (httpMethod) {
                case 'GET':
                    ExpressRouter.get(path, (req, res) => {
                        callback(req, res);
                    });
                    break;
                case 'POST':
                    ExpressRouter.post(path, (req, res) => {
                        callback(req, res);
                    });
                    break;
                case 'PUT':
                    ExpressRouter.put(path, (req, res) => {
                        callback(req, res);
                    });
                    break;
                case 'DELETE':
                    ExpressRouter.delete(path, (req, res) => {
                        callback(req, res);
                    });
                    break;
            }
        }
    } catch (error) {
        if (error) {
            throw error;
        }
    }
}


// class Router {
//     constructor (arrayOfRoutes) {
//         this.routesObject = {...arrayOfRoutes};
//         this.mountRoutes();
//     }

//     mountRoutes() {
//         for (let key in this.routesObject) {
//             try {
//                 const path = key;
//                 const handlerPath = this.routesObject[key][0];
//                 const splittedString = handlerPath.split('/');
//                 const httpMethod = this.routesObject[key][1];
//                 const className = splittedString[0].charAt(0).toUpperCase() + splittedString[0].slice(1);
//                 const module = require(`../controllers/${className}`);
//                 const controllerClass = new module;
                
//                 if (splittedString.length > 1) {
//                     const callback = controllerClass[`${splittedString[1]}`];
//                     switch (httpMethod) {
//                         case 'GET':
//                             ExpressRouter.get(path, (req, res) => {
//                                 callback(req, res);
//                             });
//                             break;
//                         case 'POST':
//                             ExpressRouter.post(path, (req, res) => {
//                                 callback(req, res);
//                             });
//                             break;
//                         case 'PUT':
//                             ExpressRouter.put(path, (req, res) => {
//                                 callback(req, res);
//                             });
//                             break;
//                         case 'DELETE':
//                             ExpressRouter.delete(path, (req, res) => {
//                                 callback(req, res);
//                             });
//                             break;
//                     }
//                 }
//             } catch (error) {
//                 if (error) {
//                     throw error;
//                 }
//             }
//         }
//     }
// }

module.exports = ExpressRouter;
