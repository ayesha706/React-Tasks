# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



  // setEditIndex((prevEditIndex) => ({ ...prevEditIndex, [index]: true }));
    // setEditText((prevEditText) => ({ ...prevEditText, [index]: items[index].item }));

    ^^^^handleEditTask

     const updatedList = [...items];
    updatedList[index].item = editText[index];
    setEditIndex((prevEditIndex) => ({ ...prevEditIndex, [index]: false }));  
    ^^^^saveEditedTask

     const editList = (e, index) => {
    setEditText((prevEditText) => ({ ...prevEditText, [index]: e.target.value }));
  }

  const cancelEdit = (index) => {
    setEditIndex((prevEditIndex) => ({ ...prevEditIndex, [index]: false }));
  };

  