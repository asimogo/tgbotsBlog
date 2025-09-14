export const useStats = () =>
    useState('stats', () => ({
        product: 500,
        articles: 200,
        tutorials: 150,
        users: 1000
    }))
