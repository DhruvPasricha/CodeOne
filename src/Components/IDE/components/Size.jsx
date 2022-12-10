class Size {
  constructor(name, value) {
    this.name = name
    this.value = value
  }
}

let small = new Size('Small', 14)
let medium = new Size('Medium', 17)
let large = new Size('Large', 20)

export let sizes = [small, medium, large]
