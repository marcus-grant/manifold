import { IUser, IMessage, MessageType } from '../shared/IUserDTO';
// import { IUser, IMessage, MessageType } from '../shared/IUser';

//
// export const users: IUserDTO[] = [
//   {
//     imageUrl: '/statics/gil.jpg',
//     userId: '1',
//     userName: 'Gil Amran',
//   },
//   {
//     imageUrl: '/statics/noa.jpg',
//     userId: '2',
//     userName: 'Noa Tevel',
//   },
//   {
//     imageUrl: '/statics/john.jpg',
//     userId: '3',
//     userName: 'John Doe',
//   },
// ];

export const marcus: IUser = {
  userId: '0',
  userName: 'Marcus',
  messages: [
    {
      messageID: '0',
      timestamp: new Date('April 28, 2019 08:37:00'),
      type: MessageType.PLAIN,
      content: 'Hello World!',
    },
    {
      messageID: '1',
      timestamp: new Date('April 29, 2019 00:00:00'),
      type: MessageType.PLAIN,
      content: 'foobar',
    },
  ],
};

export const andy: IUser = {
  userId: '1',
  userName: 'Andy',
  messages: [
    {
      messageID: '0',
      timestamp: new Date('April 20, 2019 20:20:00'),
      type: MessageType.PLAIN,
      content: 'Hello!',
    },
    {
      messageID: '1',
      timestamp: new Date('April 29, 2019 21:21:21'),
      type: MessageType.PLAIN,
      content: 'Engage!',
    },
  ],
};

export const users: IUser[] = [
  marcus,
  andy,
];

// export function getUserById(userId: string): IUserDTO {
//   return users.find(u => u.userId === userId);
// }
export function getUserById(userId: string): IUser {
  return users.find(u => u.userId === userId);
}

export function getMessagesByUserId(userId: string): IMessage[] {
  return getUserById(userId).messages;
}
