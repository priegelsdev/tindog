class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getProfileHtml() {
    const {avatar, name, age, bio} = this;
    console.log(this)

    return `
      <img id="dog-img" src="${avatar}">
      <h2 id="dog-name">${name}, ${age}</h2>
      <p id="dog-info">${bio}</p>
    `
  }
}

export default Dog;