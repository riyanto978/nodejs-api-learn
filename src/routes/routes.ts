
import express from 'express';
import RoleController from '../controller/role.controller';



const router = express.Router();



router.get("/role", RoleController.GetRole);
router.post("/role", RoleController.CreateRole);
router.patch("/role/:id", RoleController.UpdateRole);
router.delete("/role/:id", RoleController.DestroyRole);


export default router;