import { publicProcedure, router } from './trpc';
import { createHTTPServer } from '@trpc/server/adapters/standalone';

const appRouter = router({
    userList: publicProcedure.query(async () => {
        return ['Ziga', 'Hannah']
    })
});

const server = createHTTPServer({
    router: appRouter,
});

server.listen(9483);

export type AppRouter = typeof appRouter;
