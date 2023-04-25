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
    const users = await trpc.userList.query()

    // empty the appNode
    appNode.innerHTML = ''

    users.forEach(user => {
        const userNode = document.createElement('div')
        userNode.innerHTML = user
        appNode.appendChild(userNode)
    })
}

start()
