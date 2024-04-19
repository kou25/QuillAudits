import { v4 } from "uuid";

export interface folderInterface {
  id: string;
  name: string;
  isFolder: boolean;
  code?: string;
  children?: folderInterface[];
}

function getRandomCode() {
  const codes = [
    `
   function throttle(func, limit) {
    let inThrottle;
    let lastFunc;
    let lastRan;
   
    return function() {
      const context = this;
      const args = arguments;
      if (!inThrottle) {
        func.apply(context, args);
        lastRan = Date.now();
        inThrottle = true;
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
   }
   `,
    `
   function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
      console.log(number,"even");
    } else {
      console.log(number, "odd");
    }
   }
   
   checkEvenOrOdd(5);
   `,
    `
   const password = "password123";
   let attempt = "";
   
   function hackPassword() {
     const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_";
     const interval = setInterval(() => {
       attempt = "";
       for (let i = 0; i < password.length; i++) {
         attempt += characters.charAt(Math.floor(Math.random() * characters.length));
       }
       console.log("Hacking password:", attempt);
       if (attempt === password) {
         clearInterval(interval);
         console.log("Password hacked:", attempt);
       }
     }, 100);
   }
   
   hackPassword();
   `,
    `
   // The source (has been changed) is https://github.com/facebook/react/issues/5465#issuecomment-157888325
   
   const CANCELATION_MESSAGE = {
     type: 'cancelation',
     msg: 'operation is manually canceled',
   };
   
   function makeCancelable(promise) {
     let hasCanceled_ = false;
   
     const wrappedPromise = new Promise((resolve, reject) => {
       promise.then(val => hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val));
       promise.catch(reject);
     });
   
     return (wrappedPromise.cancel = () => (hasCanceled_ = true), wrappedPromise);
   }
   
   export default makeCancelable;
   `,
    `
   function debounce(func, delay) {
    let timeoutId;
   
    return function() {
      const context = this;
      const args = arguments;
   
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
   }
   `
  ];

  // Generate a random index
  const randomIndex = Math.floor(Math.random() * codes.length);

  // Return the randomly selected code
  return codes[randomIndex];
}

export const explorer = {
  name: "Example Folder",
  isFolder: true,
  id: v4(),
  children: [
    {
      name: "Sample folder",
      isFolder: true,
      id: v4(),
      children: [
        {
          name: "Folder",
          isFolder: true,
          id: v4(),
          children: [
            {
              name: "File 1",
              id: v4(),
              isFolder: false,
              code: getRandomCode()
            },
            {
              name: "File 2",
              id: v4(),
              isFolder: false,
              code: getRandomCode()
            }
          ]
        },
        {
          name: "Folder 123",
          id: v4(),
          isFolder: true,
          children: [
            {
              name: "File 1",
              id: v4(),
              isFolder: false,
              code: getRandomCode()
            },
            {
              name: "File 2",
              id: v4(),
              isFolder: false,
              code: getRandomCode()
            },
            {
              name: "File 321",
              id: v4(),
              isFolder: false,
              code: getRandomCode()
            }
          ]
        },
        {
          name: "Example File 1",
          id: v4(),
          isFolder: false,
          code: getRandomCode()
        },
        {
          name: "Example File 2",
          id: v4(),
          isFolder: false,
          code: getRandomCode()
        },
        {
          name: "Example File 321",
          id: v4(),
          isFolder: false,
          code: getRandomCode()
        }
      ]
    },
    {
      name: "Sample folder",
      id: v4(),
      isFolder: true,
      children: [
        {
          name: "File 4",
          id: v4(),
          isFolder: false,
          code: getRandomCode()
        }
      ]
    },
    {
      name: "Folder 123",
      id: v4(),
      isFolder: true,
      children: [
        {
          name: "File 4",
          id: v4(),
          isFolder: false,
          code: getRandomCode()
        }
      ]
    },
    {
      name: "Example File 2",
      id: v4(),
      isFolder: false,
      code: getRandomCode()
    },
    {
      name: "Example File 321",
      id: v4(),
      isFolder: false,
      code: getRandomCode()
    }
  ]
};
