import { v4 } from "uuid";

export interface folderInterface {
  id: string;
  name: string;
  isFolder: boolean;
  children?: folderInterface[];
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
              isFolder: false
            },
            {
              name: "File 2",
              id: v4(),
              isFolder: false
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
              isFolder: false
            },
            {
              name: "File 2",
              id: v4(),
              isFolder: false
            },
            {
              name: "File 321",
              id: v4(),
              isFolder: false
            }
          ]
        },
        {
          name: "Example File 1",
          id: v4(),
          isFolder: false
        },
        {
          name: "Example File 2",
          id: v4(),
          isFolder: false
        },
        {
          name: "Example File 321",
          id: v4(),
          isFolder: false
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
          isFolder: false
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
          isFolder: false
        }
      ]
    },
    {
      name: "Example File 2",
      id: v4(),
      isFolder: false
    },
    {
      name: "Example File 321",
      id: v4(),
      isFolder: false
    }
  ]
};
