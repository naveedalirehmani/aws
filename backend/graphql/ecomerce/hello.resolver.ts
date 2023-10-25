const resolver = {
  Query: {
    hello: (parent:any, args:any, context:any) => {
      console.log('called');
      return 'hello graphql server';
    },
  },
  // Subscription:{
  //   hello:{
  //     async subscribe(parent,context,{pubSub}){
  //       return pubSub.asyncIterator('HELLO_CALLED')
  //     }
  //   }
  // }
};

export default resolver;
