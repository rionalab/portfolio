import { QueryClient, QueryClientProvider } from "react-query"
import App from './App'

const client = new QueryClient();

const index = () =>  {
    return (
        <QueryClientProvider client={client}>
            <App />
        </QueryClientProvider>
    )
}

export default index