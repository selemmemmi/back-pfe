
export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Client",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "email",
    width: 230,
  },

  {
    field: "avancement",
    headerName: "avancement",
    width: 150,
  },
  {
    field: "projet",
    headerName: "projet",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.projet}`}>
          {params.row.projet}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "salem",
    projet: "web",
    email: "1snow@gmail.com",
    avancement: 70 ,
  },
  {
    id: 2,
    username: "Snow",
    projet: "mobile",
    email: "1snow@gmail.com",
    avancement: 70 ,
  },
  {
    id: 3,
    username: "Snow",
    projet: "mobile",
    email: "1snow@gmail.com",
    avancement: 70 ,
  },
  {
    id: 4,
    username: "Snow",
    projet: "mobile",
    email: "1snow@gmail.com",
    avancement: 70 ,
  },
  {
    id: 5,
    username: "Snow",
    projet: "mobile",
    email: "1snow@gmail.com",
    avancement: 70 ,
  },
  {
    id: 6,
    username: "Snow",
    projet: "mobile",
    email: "1snow@gmail.com",
    avancement: 70 ,
  },
  {
    id: 7,
    username: "Snow",
    projet: "mobile",
    email: "1snow@gmail.com",
    avancement: 70 ,
  },
  {
    id: 8,
    username: "Snow",
    projet: "mobile",
    email: "1snow@gmail.com",
    avancement: 70 ,
  },
];

export const assistanceColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "poste",
    headerName: "Poste",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.poste}`}>
          {params.row.poste}
        </div>
      );
    },
  },
];



export const assistance = [
  {
    id: 1,
    name: "salem",
    poste: "P D G",
    email: "salem@gmail.com"
  },
  {
    id: 2,
    name: "sawsen",
    poste: "manager",
    email: "sawsen@gmail.com"
  },
  {
    id: 3,
    name: "hazem",
    poste: "dev",
    email: "hazem@gmail.com"
  },
];