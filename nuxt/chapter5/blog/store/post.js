export const state = () => ({
    postList: [],
    tagCloud: [],
    archives: [],
    categoryInfos: []
})

export const actions = {
    async initData({ commit, state }) {
        let postList = [
            {
                id: 1,
                title: "첫번째 글",
                category: {id: 1, name: "Vue / Nuxt"},
                content: "첫번째 글입니다. 어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리",
                createAt: new Date('2019-07-03T10:13:00')
            },
            {
                id: 2,
                title: "두번째 글",
                category: {id: 1, name: "Vue / Nuxt"},
                content: "두번째 글입니다. 어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리",
                createAt: new Date('2019-07-03T10:13:00')
            },
            {
                id: 3,
                title: "세번째 글",
                category: {id: 1, name: "Vue / Nuxt"},
                content: "세번째 글입니다. 어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리",
                createAt: new Date('2019-07-03T10:13:00')
            },
            {
                id: 4,
                title: "네번째 글",
                category: {id: 2, name: "Etc"},
                content: "네번째 글입니다. 어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리",
                createAt: new Date('2019-07-03T10:13:00')
            },
            {
                id: 5,
                title: "다섯번째 글",
                category: {id: 2, name: "Etc"},
                content: "다섯번째 글입니다. 어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리어쩌고 저쩌고 주저리 주저리",
                createAt: new Date('2019-07-03T10:13:00')
            }
        ]

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

        commit("setPostList", postList)
        commit("setTagCloud", tagCloud)
        commit("setArchives", archives)
        commit("setCategoryInfos", categoryInfos)
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