export function fetchList(pageSize, currentPage) {
    return `{
        posts(pageSize: ${pageSize}, currentPage: ${currentPage}) {
            id
            category {
                id
                name
            }
            title
            content
            createAt
        }
        totalCount
    }`
}