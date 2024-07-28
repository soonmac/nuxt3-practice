interface CartItem {
    name: String;
}

export const useCart = () => useState<CartItem[]>('cart', () => [])

export const useAuth = () => useState('isAuthenticated', ()=> ({isAuthenticated:false}))

export const usePagVisitCount = () => useState('pageVisitCount', () => 0);