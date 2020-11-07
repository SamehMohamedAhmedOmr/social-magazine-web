export interface Admin {
	message : string,
	body: {
		token: string ,
		expire_at: string,
		first_name: string,
		family_name: string,
		email: string,
		account_types: {
			id: number,
			name: string,
			key: string
		}[]
	},
	pagination: {}
}
