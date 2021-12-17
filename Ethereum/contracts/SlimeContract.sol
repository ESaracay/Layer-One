pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SlimeContract is ERC721, Ownable {
    uint8 MAX_COLOR = 255;
    uint MAX_SLIMES = 1000;
    event NewSlime(uint indexed slimeId, string name);
    struct Slime {
        uint8 _r;
        uint8 _g;
        uint8 _b;
        uint8 _size;
        string _name;
    }
    Slime[] public slimes;

    constructor() ERC721("Slime", "SL"){}

    function mintSlime(string memory name) external {
        assert(slimes.length < MAX_SLIMES);
        uint randInt = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender)));
        // Uses random value to generate slime color values
        uint8 r = uint8(randInt % MAX_COLOR);
        uint8 g = uint8((randInt / 10) % MAX_COLOR);
        uint8 b = uint8((randInt / 100) % MAX_COLOR);
        uint8 size = uint8(randInt % 100);
        Slime memory newSlime = Slime(r, g, b, size, name);
        slimes.push(newSlime);
        _safeMint(msg.sender, slimes.length - 1);
        emit NewSlime(slimes.length - 1, name);
    }

    function getSlime(uint tokenId) external view returns(Slime memory) {
        assert(_exists(tokenId));
        return slimes[tokenId];
    }

    function getAllOwnedSlimes() external view returns(uint[] memory) {
        uint size = balanceOf(msg.sender);
        uint[] memory ownedSlimes = new uint[](size);
        uint counter = 0;
        for (uint i = 0; i < slimes.length; i++) {
            if (_isApprovedOrOwner(msg.sender, i)) {
                ownedSlimes[counter] = i;
                counter++;
            }
        }
        return ownedSlimes;
    }

    function updateName(uint tokenId, string memory name) external {
        assert(_exists(tokenId));
        assert(_isApprovedOrOwner(msg.sender, tokenId));

        slimes[tokenId]._name = name;
    }
}