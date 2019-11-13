const createTipper = (baseTip) => {
    return (amount) => amount * baseTip
}

const _10PercentTipper = createTipper(.1)
const _30PercentTipper = createTipper(.3)
const _60PercentTipper = createTipper(.6)


console.log(_10PercentTipper(100))
console.log(_30PercentTipper(100))
console.log(_60PercentTipper(100))