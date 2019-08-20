import * as queries from './queries'

const url = 'http://localhost:8080/graphql'

export const state = () => ({
    postList: [],
    tagCloud: [],
    archives: [],
    categoryInfos: [],
    //페이징 관련 속성
    pageSize: 2,
    pageGroupSize: 2,
    totalCount: 0,
    totalPageCount: 0,
    currentPage: 1
})

export const actions = {
    async initData({ commit, state }) {
        let tagCloud = [
            "Vue / Nuxt", "Etc"
        ]

        let archives = [
            {
                archiveDate: {
                    year: 2019,
                    month: 6
                },
                count: 2
            },
            {
                archiveDate: {
                    year: 2019,
                    month: 7
                },
                count: 2
            }
        ]

        let categoryInfos = [
            {
                id: 1,
                name: "Vue / Nuxt",
                count: 3
            },
            {
                id: 2,
                name: "Etc",
                count: 2
            }
        ]

        commit("setTagCloud", tagCloud)
        commit("setArchives", archives)
        commit("setCategoryInfos", categoryInfos)
    },

    async fetchList({ commit, state }) {
        const result = await this.$axios.$post(
            url,
            {
                query: queries.fetchList(state.pageSize, state.currentPage)
            }
        )

        commit('setPostList', result.data.posts)
        commit('setTotalCount', result.data.totalCount)
    }
}

export const mutations = {
    setPostList(state, postList) {
        state.postList = []
        state.postList = postList
    },

    setTagCloud(state, tagCloud) {
        state.tagCloud = []
        state.tagCloud = tagCloud
    },

    setArchives(state, archives) {
        state.archives = []
        state.archives = archives
    },

    setCategoryInfos(state, categoryInfos) {
        state.categoryInfos = []
        state.categoryInfos = categoryInfos
    },
}

export const getters = {
    getPostList: (state) => {
        let result = state.postList
        return result
    },

    getTagCloud: (state) => {
        let result = state.tagCloud
        return result
    },

    getArchives: (state) => {
        let result = state.archives
        return result
    },

    getCategoryInfos: (state) => {
        let result = state.categoryInfos
        return result
    },
}