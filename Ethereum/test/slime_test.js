const Slime = artifacts.require("SlimeContract");

contract("Slime", (accounts) => {
    let contractInstance;
    let testAccount = accounts[0];

    before(async function() {
        contractInstance = await Slime.new();
    })

    it ("Minting works", async () => {
        const result = await contractInstance.mintSlime("one", {from: testAccount});
        assert.equal(result.receipt.status, true);
        assert.equal(result.logs[1].args.name, "one", "Name did not match");
        assert.equal(result.logs[1].args.slimeId, 0, "Slime Id was not zero");
    })

    it ("Getting Slime works", async() => {
        const result = await contractInstance.getSlime(0, {from: testAccount});
        assert.equal(result._name, "one", "retrieved name");
        assert.isTrue(result._r != "", "[message]");
        assert.isTrue(result._g != "", "[message]");
        assert.isTrue(result._b != "", "[message]");
        assert.isTrue(result._size != "", "[message]");
    })

})