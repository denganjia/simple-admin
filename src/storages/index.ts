import { defineStore } from "pinia";
import { ref } from "vue";

//* using option store syntax
// export const useStore = defineStore('main', {
//   state: () => {
//     return {
//       someState: 'hello pinia',
//     }
//   },
//   persist: true,
// })

//* or using setup store syntax
export const useStore = defineStore(
	"main",
	() => {
		const someState = ref("hello pinia");
		return { someState };
	},
	{
		persist: true,
	},
);
