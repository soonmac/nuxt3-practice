export default defineNuxtRouteMiddleware(()=> {
    const pageVisitCount = usePagVisitCount();
    pageVisitCount.value++;
})