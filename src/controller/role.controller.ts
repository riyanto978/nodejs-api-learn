import { Request, Response } from 'express';
import Role from '../db/models/role'
import { errorResponse, successResponse } from '../helpers/response_status';

type createRoleType = {
    roleName: string,
    active: boolean
}

class RoleController {
    static GetRole = async (req: Request, res: Response): Promise<Response> => {
        try {
            const roles = await Role.findAll({
                where: {
                    active: true,
                }
            })


            return successResponse(res, 'ok', roles);
        } catch (error: any) {
            if (error != null && error instanceof Error) {
                return errorResponse(res, error.message, 401, error);
            }

            return errorResponse(res, 'internal server error', 500, error);
        }
    }

    static CreateRole = async (req: Request<{}, {}, createRoleType>, res: Response): Promise<Response> => {
        try {
            const { active, roleName } = req.body

            const create = await Role.create({
                roleName,
                active
            });

            return successResponse(res, 'created', create);
        } catch (error: any) {
            if (error != null && error instanceof Error) {
                return errorResponse(res, error.message, 401, error);
            }

            return errorResponse(res, 'internal server error', 500, error);
        }
    }

    static UpdateRole = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            const { active, roleName } = req.body

            const role = await Role.findByPk(id);
            if (!role) return errorResponse(res, 'not found', 404, {});

            role.roleName = roleName;
            role.active = active;
            await role.save();


            return successResponse(res, 'update', role);
        } catch (error: any) {
            if (error != null && error instanceof Error) {
                return errorResponse(res, error.message, 401, error);
            }

            return errorResponse(res, 'internal server error', 500, error);
        }
    }

    static DestroyRole = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;


            const role = await Role.findByPk(id);
            if (!role) return errorResponse(res, 'not found', 404, {});

            await role.destroy();

            return successResponse(res, 'destoy', null);
        } catch (error: any) {
            if (error != null && error instanceof Error) {
                return errorResponse(res, error.message, 401, error);
            }

            return errorResponse(res, 'internal server error', 500, error);
        }
    }


}

export default RoleController;

