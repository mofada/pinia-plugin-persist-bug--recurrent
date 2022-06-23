import {defineStore} from 'pinia'

/**
 * define
 */
export interface IUserInfo {
	name: string,
	password: string,
	email: string,
}

const STORE_KEY = 'user-info'
export const useUserStore = defineStore(STORE_KEY, {
	state: () => {
		return <IUserInfo>{
			name: '',
			password: '',
			email: '',
		}
	},
	actions: {
		/**
		 * save user info
		 * @param userInfo
		 */
		setUserInfo(userInfo: IUserInfo) {
			this.$patch(userInfo)
		}
	},
	persist: {
		enabled: true,
		strategies: [
			{
				key: STORE_KEY,
				storage: localStorage
			}
		]
	}
})
