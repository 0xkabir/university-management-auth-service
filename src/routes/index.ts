import { Router } from 'express';
import { UserRoutes } from '../app/modules/user/user.routes';
import { AcademicSemesterRoutes } from '../app/modules/academicSemester/academicSemester.routes';

const router = Router();

const routes = [
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/semesters',
    route: AcademicSemesterRoutes,
  },
];

routes.forEach(route => {
  router.use(route.path, route.route);
});

export const ModuleRoutes = router;
