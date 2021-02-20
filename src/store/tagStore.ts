// const localStorageKeyName = 'tagList';
//
// const tagStore = {
//   reset: [{id: 1, name: '衣'}, {id: 2, name: '食'}, {id: 3, name: '住'}, {id: 4, name: '行'}],
//   tagList: [] as Tag[],
//   fetchTags() {
//     this.tagList = JSON.parse(localStorage.getItem(localStorageKeyName) || JSON.stringify(this.reset));
//     return this.tagList;
//   },
//   findTag(id: number) {
//     return this.tagList.filter(tag => tag.id === id)[0];
//   },
//   // createTag(name: string) {
//   //   let message: message;
//   //   const names = this.tagList.map(item => item.name);
//   //   if (names.indexOf(name) >= 0) {
//   //     alert('便签名重复');
//   //     message = 'duplicated';
//   //     return message;
//   //   }
//   //   const id = createId();
//   //   this.tagList.push({id: id, name: name});
//   //   this.saveTags();
//   //   message = 'success';
//   //   return message;
//   // },
//   removeTag(id: number) {
//     let index = -1;
//     for (let i = 0; i < this.tagList.length; i++) {
//       if (this.tagList[i].id === id) {
//         index = i;
//         break;
//       }
//
//     }
//     if (index === -1) {
//       return false;
//     }
//     this.tagList.splice(index, 1);
//     this.saveTags();
//     return true;
//   },
//   updateTag(id: number, name: string) {
//     let message: message;
//     const idList = this.tagList.map(item => item.id);
//     if (idList.indexOf(id) >= 0) {
//       const names = this.tagList.map(item => item.name);
//       if (names.indexOf(name) === -1) {
//         const tag = this.tagList.filter(item => item.id === id)[0];
//         tag.name = name;
//         this.saveTags();
//         message = 'success';
//         return message;
//       } else {
//         message = 'duplicated';
//         return message;
//       }
//
//     } else {
//       message = 'not found';
//       return message;
//     }
//   },
//   saveTags() {
//     localStorage.setItem(localStorageKeyName, JSON.stringify(this.tagList));
//   },
// };
//
// tagStore.fetchTags();
//
//
// export default tagStore;
