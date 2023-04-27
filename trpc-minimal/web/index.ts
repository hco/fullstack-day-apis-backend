import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../backend/index';

const trpc = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: '/trpc',
        }),
    ],
});

const start = async () => {
    const appNode = document.getElementById('app')!
    // empty the appNode
    appNode.innerHTML = ''

    const users = await trpc.userList.query();

    users.forEach(user => {
        const userElement = document.createElement('div');
        userElement.innerHTML = user;
        appNode.appendChild(userElement)
    })
}

start()
