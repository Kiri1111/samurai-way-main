export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    post: string
    likes: number
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type SidebarType = {}

export type RootStateType = {
    profilePages: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}


export let state: RootStateType = {
    profilePages: {
        posts: [
            {id: 1, post: 'Hello bro!!', likes: 22},
            {id: 2, post: 'I student It-incubator', likes: 38},
        ]

    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ],
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo!!!!!'},
            {id: 4, message: 'Yo!!!!!'},
            {id: 5, message: 'Yo!!!!!'},
            {id: 6, message: 'Yo!!!!!'},
        ]
    },
    sidebar: {}

}