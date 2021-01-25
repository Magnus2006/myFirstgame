// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level":return tiles.createTilemap(hex`1000100009010101010101010101010a0a0a0a01090901010101010101010107020206010909090901010101010101070202060109090909090909010101010702020601090909090909090101010107020206010909090909090101010101070202060109090909090901010101010702020601090909090901010101010107020206010101010101010101010104020202060101010101010101010104020202020601010101010101010104020202020805010101010101010104020202020601010101010101040303020202020805010101030303030202020808080501010101010202020202080501010101010101010108080808050101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 . . . . . 2 
2 2 2 2 2 2 2 2 2 . . . . . . 2 
2 2 2 2 2 2 2 2 . . . . . . . 2 
2 2 2 2 2 2 2 . . . . . . 2 2 2 
2 2 2 2 . . . . . . . . . 2 2 2 
. . . . . . . . . . . 2 2 2 2 2 
. . . . . . . 2 2 2 2 2 2 2 2 2 
. . . . . 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass3,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath8,myTiles.tile3,sprites.dungeon.floorLightMoss], TileScale.Sixteen);
            case "level_0":
            case "level_0":return tiles.createTilemap(hex`1000100008070707070707070707070707070706020c0c0c0c0c0c0c0c0c0c0c0c0c0c05020c0a0a0a0a0a0a0a0a0a0a0a0a0a05020c0a0a0c0c0c0c0c0c0c0c0c0c0c0b020c0a0a0c0a0a0a0a0a0a0a0a0a0a05020c0a0a0c0a0a0a0a0a0a0a0a0a0a05020c0c0c0c0a0c0c0c0c0c0c0c0c0c05020a0a0a0c0a0c0a0a0a0a0a0c0a0a05020c0c0a0c0a0c0c0c0c0c0c0c0c0c05020a0c0a0c0a0a0a0a0a0a0a0c0a0a05020a0c0c0c0c0c0c0c0c0c0c0c0a0a05020a0c0a0c0a0a0a0a0a0a0a0c0c0c05020a0c0a0c0a0c0c0c0c0c0c0c0a0c05020a0c0a0c0a0c0a0a0a0a0a0c0a0c05020a0c0a0c0a0c0c0c0c0c0a0c0a0a0501030303030303030303030309030304`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 2 . . . . . . . . . . . 2 
2 . 2 2 . 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 2 . 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . 2 . . . . . . . . . 2 
2 2 2 2 . 2 . 2 2 2 2 2 . 2 2 2 
2 . . 2 . 2 . . . . . . . . . 2 
2 2 . 2 . 2 2 2 2 2 2 2 . 2 2 2 
2 2 . . . . . . . . . . . 2 2 2 
2 2 . 2 . 2 2 2 2 2 2 2 . . . 2 
2 2 . 2 . 2 . . . . . . . 2 . 2 
2 2 . 2 . 2 . 2 2 2 2 2 . 2 . 2 
2 2 . 2 . 2 . . . . . 2 . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.doorOpenSouth,sprites.dungeon.floorLight0,sprites.dungeon.doorClosedEast,sprites.dungeon.darkGroundCenter], TileScale.Sixteen);
            case "level_1":
            case "level_1":return tiles.createTilemap(hex`1000100009010101010101010101010a0a0a0a01090901010101010101010107020206010909090901010101010101070202060109090909090909010101010702020601090909090909090101010107020206010909090909090101010101070202060109090909090901010101010702020601090909090901010101010107020206010101010101010101010104020202060101010101010101010104020202020601010101010101010104020202020805010101010101010104020202020601010101010101040303020202020805010101030303030202020808080501010101010202020202080501010101010101010108080808050101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 . . . . . 2 
2 2 2 2 2 2 2 2 2 . . . . . . 2 
2 2 2 2 2 2 2 2 . . . . . . . 2 
2 2 2 2 2 2 2 . . . . . . 2 2 2 
2 2 2 2 . . . . . . . . . 2 2 2 
. . . . . . . . . . . 2 2 2 2 2 
. . . . . . . 2 2 2 2 2 2 2 2 2 
. . . . . 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass3,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath8,myTiles.tile3,sprites.dungeon.floorLightMoss], TileScale.Sixteen);
            case "level_2":
            case "level_2":return tiles.createTilemap(hex`1000100005030303030303030303030303030302060c0c0c0c0c0c0c0c0c0c0c0a0a0c01060c0a0c0a0a0a0c0a0c0a0c0a0a0c01090c0a0c0a0c0c0c0a0c0a0c0c0c0c01060c0c0c0a0c0a0a0a0c0a0c0a0a0c01060a0a0a0a0c0a0c0c0c0a0c0a0a0c01060c0c0c0c0c0a0c0a0a0a0c0a0a0c01060a0c0a0a0c0a0c0c0c0c0c0a0a0c01060a0c0a0a0c0a0a0a0a0a0a0a0a0a01060a0c0c0c0c0c0c0a0c0c0c0c0c0c01060a0a0a0a0a0a0c0a0a0a0c0a0a0c01060c0c0c0a0c0c0c0c0c0a0c0c0a0c01060c0a0c0a0c0a0a0a0c0a0a0c0a0c01060c0a0c0c0c0a0c0a0c0c0c0c0a0c01060c0a0a0a0a0a0c0c0c0a0a0a0a0c0b04070707070707070707070707070708`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . 2 2 . 2 
2 . 2 . 2 2 2 . 2 . 2 . 2 2 . 2 
. . 2 . 2 . . . 2 . 2 . . . . 2 
2 . . . 2 . 2 2 2 . 2 . 2 2 . 2 
2 2 2 2 2 . 2 . . . 2 . 2 2 . 2 
2 . . . . . 2 . 2 2 2 . 2 2 . 2 
2 2 . 2 2 . 2 . . . . . 2 2 . 2 
2 2 . 2 2 . 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . 2 . . . . . . 2 
2 2 2 2 2 2 2 . 2 2 2 . 2 2 . 2 
2 . . . 2 . . . . . 2 . . 2 . 2 
2 . 2 . 2 . 2 2 2 . 2 2 . 2 . 2 
2 . 2 . . . 2 . 2 . . . . 2 . 2 
2 . 2 2 2 2 2 . . . 2 2 2 2 . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.doorOpenWest,sprites.dungeon.floorLight0,sprites.dungeon.doorOpenEast,sprites.dungeon.darkGroundCenter], TileScale.Sixteen);
            case "level_3":
            case "level_3":return tiles.createTilemap(hex`1000100009010101010101010101010a0a0a0a01090901010101010101010107020206010909090901010101010101070202060109090909090909010101010702020601090909090909090101010107020206010909090909090101010101070202060109090909090901010101010702020601090909090901010101010107020206010101010101010101010104020202060101010101010101010104020202020601010101010101010104020202020805010101010101010104020202020601010101010101040303020202020805010101030303030202020808080501010101010202020202080501010101010101010108080808050101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 . . . . . 2 
2 2 2 2 2 2 2 2 2 . . . . . . 2 
2 2 2 2 2 2 2 2 . . . . . . . 2 
2 2 2 2 2 2 2 . . . . . . 2 2 2 
2 2 2 2 . . . . . . . . . 2 2 2 
. . . . . . . . . . . 2 2 2 2 2 
. . . . . . . 2 2 2 2 2 2 2 2 2 
. . . . . 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass3,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath8,myTiles.tile3,sprites.dungeon.floorLightMoss], TileScale.Sixteen);
            case "level_4":
            case "level_4":return tiles.createTilemap(hex`1000100008070707070707070707070707070706020c0c0c0c0c0c0c0c0c0c0c0c0c0c05020c0a0a0a0a0a0a0a0a0a0a0a0a0a05020c0a0a0c0c0c0c0c0c0c0c0c0c0c0b020c0a0a0c0a0a0a0a0a0a0a0a0a0a05020c0a0a0c0a0a0a0a0a0a0a0a0a0a05020c0c0c0c0a0c0c0c0c0c0c0c0c0c05020a0a0a0c0a0c0a0a0a0a0a0c0a0a05020c0c0a0c0a0c0c0c0c0c0c0c0c0c05020a0c0a0c0a0a0a0a0a0a0a0c0a0a05020a0c0c0c0c0c0c0c0c0c0c0c0a0a05020a0c0a0c0a0a0a0a0a0a0a0d0d0c05020a0c0a0c0a0c0c0c0c0d0d0d0a0c05020a0c0a0c0a0c0a0a0a0a0a0d0a0c05020a0e0a0c0a0c0c0c0c0c0a0d0a0a0501030303030303030303030309030304`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 2 . . . . . . . . . . . . 
2 . 2 2 . 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 2 . 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . 2 . . . . . . . . . 2 
2 2 2 2 . 2 . 2 2 2 2 2 . 2 2 2 
2 . . 2 . 2 . . . . . . . . . 2 
2 2 . 2 . 2 2 2 2 2 2 2 . 2 2 2 
2 2 . . . . . . . . . . . 2 2 2 
2 2 . 2 . 2 2 2 2 2 2 2 . . . 2 
2 2 . 2 . 2 . . . . . . . 2 . 2 
2 2 . 2 . 2 . 2 2 2 2 2 . 2 . 2 
2 2 . 2 . 2 . . . . . 2 . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.doorOpenSouth,sprites.dungeon.floorLight0,sprites.dungeon.doorClosedEast,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.buttonOrange], TileScale.Sixteen);
            case "level_5":
            case "level_5":return tiles.createTilemap(hex`1000100008070707070707070707070707070706020c0c0c0c0c0c0c0c0c0c0c0c0c0c05020c0a0a0a0a0a0a0a0a0a0a0a0a0a05020c0a0a0c0c0c0c0c0c0c0c0c0c0c0b020c0a0a0c0a0a0a0a0a0a0a0a0a0a05020c0a0a0c0a0a0a0a0a0a0a0a0a0a05020c0c0c0c0a0c0c0c0c0c0c0c0c0c05020a0a0a0c0a0c0a0a0a0a0a0c0a0a05020c0c0a0c0a0c0c0c0c0c0c0c0c0c05020a0c0a0c0a0a0a0a0a0a0a0c0a0a05020a0c0c0c0c0c0c0c0c0c0c0c0a0a05020a0c0a0c0a0a0a0a0a0a0a0d0d0c05020a0c0a0c0a0c0c0c0c0d0d0d0a0c05020a0c0a0c0a0c0a0a0a0a0a0d0a0c05020a0e0a0c0a0c0c0c0c0c0a0d0a0a0501030303030303030303030309030304`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 2 . . . . . . . . . . . . 
2 . 2 2 . 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 2 . 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . 2 . . . . . . . . . 2 
2 2 2 2 . 2 . 2 2 2 2 2 . 2 2 2 
2 . . 2 . 2 . . . . . . . . . 2 
2 2 . 2 . 2 2 2 2 2 2 2 . 2 2 2 
2 2 . . . . . . . . . . . 2 2 2 
2 2 . 2 . 2 2 2 2 2 2 2 . . . 2 
2 2 . 2 . 2 . . . . . . . 2 . 2 
2 2 . 2 . 2 . 2 2 2 2 2 . 2 . 2 
2 2 . 2 . 2 . . . . . 2 . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.doorOpenSouth,sprites.dungeon.floorLight0,sprites.dungeon.doorClosedEast,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.buttonOrange], TileScale.Sixteen);
            case "level_6":
            case "level_6":return tiles.createTilemap(hex`1000100009010101010101010101010a0a0a0a01090901010101010101010107020206010909090901010101010101070202060109090909090909010101010702020601090909090909090101010107020206010909090909090101010101070202060109090909090901010101010702020601090909090901010101010107020206010101010101010101010104020202060101010101010101010104020202020601010101010101010104020202020805010101010101010104020202020601010101010101040303020202020805010101030303030202020808080501010101010202020202080501010101010101010108080808050101010101010101010101`, img`
. 2 2 2 2 2 2 2 2 2 2 . . . . 2 
. . 2 2 2 2 2 2 2 2 2 . . . . 2 
. . . . 2 2 2 2 2 2 2 . . . . 2 
. . . . . . . 2 2 2 2 . . . . 2 
. . . . . . . 2 2 2 2 . . . . 2 
. . . . . . 2 2 2 2 2 . . . . 2 
. . . . . . 2 2 2 2 2 . . . . 2 
. . . . . 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 . . . . . 2 
2 2 2 2 2 2 2 2 2 . . . . . . 2 
2 2 2 2 2 2 2 2 . . . . . . . 2 
2 2 2 2 2 2 2 . . . . . . 2 2 2 
2 2 2 2 . . . . . . . . . 2 2 2 
. . . . . . . . . . . 2 2 2 2 2 
. . . . . . . 2 2 2 2 2 2 2 2 2 
. . . . . 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass3,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath8,myTiles.tile3,sprites.dungeon.floorLightMoss], TileScale.Sixteen);
            case "level_7":
            case "level_7":return tiles.createTilemap(hex`1000100005030303030303030303030303030302060b0b0b0b0b0b0b0b0b0b0b0a0a0b01060b0a0b0a0a0a0b0a0b0a0b0a0a0b01090b0a0b0a0b0b0b0a0b0a0b0b0b0b01060b0b0b0a0b0a0a0a0b0a0b0a0a0b01060a0a0a0a0b0a0b0b0b0a0b0a0a0b01060b0b0b0b0b0a0b0a0a0a0b0a0a0b01060a0b0a0a0b0a0b0b0b0b0b0a0a0b01060a0b0a0a0b0a0a0a0a0a0a0a0a0a01060a0b0b0b0b0b0b0a0b0b0b0b0b0b01060a0a0a0a0a0a0b0a0a0a0b0a0a0b01060b0b0b0a0b0b0b0b0b0a0b0b0a0b01060b0a0b0a0b0a0a0a0b0a0a0b0a0b01060b0a0b0b0b0a0b0a0b0b0b0b0a0b01060b0a0a0a0a0a0b0b0b0a0a0a0a0b0a04070707070707070707070707070708`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . 2 2 . 2 
2 . 2 . 2 2 2 . 2 . 2 . 2 2 . 2 
. . 2 . 2 . . . 2 . 2 . . . . 2 
2 . . . 2 . 2 2 2 . 2 . 2 2 . 2 
2 2 2 2 2 . 2 . . . 2 . 2 2 . 2 
2 . . . . . 2 . 2 2 2 . 2 2 . 2 
2 2 . 2 2 . 2 . . . . . 2 2 . 2 
2 2 . 2 2 . 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . 2 . . . . . . 2 
2 2 2 2 2 2 2 . 2 2 2 . 2 2 . 2 
2 . . . 2 . . . . . 2 . . 2 . 2 
2 . 2 . 2 . 2 2 2 . 2 2 . 2 . 2 
2 . 2 . . . 2 . 2 . . . . 2 . 2 
2 . 2 2 2 2 2 . . . 2 2 2 2 . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.doorOpenWest,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundCenter], TileScale.Sixteen);
            case "level_8":
            case "level_8":return tiles.createTilemap(hex`100010000b0a0a0a0a0a0a0a0a0a0a0a0a0a0a09040203030201010101010102030302080403020303020101010102030302030804030302030302010102030302030308040203030203030202030302030302080401020303020303030302030302010804010102030302030302030302010108040101010203030202030302010101080401010102030302020303020101010804010102030302030302030302010108040102030302030303030203030201080402030302030302020303020303020804030302030302010102030302030308040302030302010101010203030203080402030302010101010101020303020805060606060606060606060606060607`, img`
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. 2 . . . . . . . . . . . . 2 . 
. 2 2 . . . . . . . . . . 2 2 . 
. 2 2 2 . . . . . . . . 2 2 2 . 
. 2 2 2 . . . . . . . . 2 2 2 . 
. 2 2 . . . . . . . . . . 2 2 . 
. 2 . . . . . . . . . . . . 2 . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . 2 2 2 2 . . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,sprites.dungeon.floorLight2,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest], TileScale.Sixteen);
            case "level_9":
            case "level_9":return tiles.createTilemap(hex`1000100009010101010101010101010a0a0a0a01090901010101010101010107020206010909090901010101010101070202060109090909090909010101010702020601090909090909090101010107020206010909090909090101010101070202060109090909090901010101010702020601090909090901010101010107020206010101010101010101010104020202060101010101010101010104020202020601010101010101010104020202020805010101010101010104020202020601010101010101040303020202020805010101030303030202020808080501010101010202020202080501010101010101010108080808050101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 . . . . . 2 
2 2 2 2 2 2 2 2 2 . . . . . . 2 
2 2 2 2 2 2 2 2 . . . . . . . 2 
2 2 2 2 2 2 2 . . . . . . 2 2 2 
2 2 2 2 . . . . . . . . . 2 2 2 
. . . . . . . . . . . 2 2 2 2 2 
. . . . . . . 2 2 2 2 2 2 2 2 2 
. . . . . 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass3,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath8,myTiles.tile3,sprites.dungeon.floorLightMoss], TileScale.Sixteen);
            case "level_10":
            case "level_10":return tiles.createTilemap(hex`1000100008070707070707070707070707070706020c0c0c0c0c0c0c0c0c0c0c0c0c0c05020c0a0a0a0a0a0a0a0a0a0a0a0a0a05020c0a0a0c0c0c0c0c0c0c0c0c0c0c0b020c0a0a0c0a0a0a0a0a0a0a0a0a0a05020c0a0a0c0a0a0a0a0a0a0a0a0a0a05020c0c0c0c0a0c0c0c0c0c0c0c0c0c05020a0a0a0c0a0c0a0a0a0a0a0c0a0a05020c0c0a0c0a0c0c0c0c0c0c0c0c0c05020a0c0a0c0a0a0a0a0a0a0a0c0a0a05020a0c0c0c0c0c0c0c0c0c0c0c0a0a05020a0c0a0c0a0a0a0a0a0a0a0d0d0c05020a0c0a0c0a0c0c0c0c0d0d0d0a0c05020a0c0a0c0a0c0a0a0a0a0a0d0a0c05020a0e0a0c0a0c0c0c0c0c0a0d0a0a0501030303030303030303030309030304`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 2 . . . . . . . . . . . . 
2 . 2 2 . 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 2 . 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . 2 . . . . . . . . . 2 
2 2 2 2 . 2 . 2 2 2 2 2 . 2 2 2 
2 . . 2 . 2 . . . . . . . . . 2 
2 2 . 2 . 2 2 2 2 2 2 2 . 2 2 2 
2 2 . . . . . . . . . . . 2 2 2 
2 2 . 2 . 2 2 2 2 2 2 2 . . . 2 
2 2 . 2 . 2 . . . . . . . 2 . 2 
2 2 . 2 . 2 . 2 2 2 2 2 . 2 . 2 
2 2 . 2 . 2 . . . . . 2 . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.doorOpenSouth,sprites.dungeon.floorLight0,sprites.dungeon.doorClosedEast,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.buttonOrange], TileScale.Sixteen);
            case "level_11":
            case "level_11":return tiles.createTilemap(hex`1000100009010101010101010101010a0a0a0a01090901010101010101010107020206010909090901010101010101070202060109090909090909010101010702020601090909090909090101010107020206010909090909090101010101070202060109090909090901010101010702020601090909090901010101010107020206010101010101010101010104020202060101010101010101010104020202020601010101010101010104020202020805010101010101010104020202020601010101010101040303020202020805010101030303030202020808080501010101010202020202080501010101010101010108080808050101010101010101010101`, img`
. 2 2 2 2 2 2 2 2 2 2 . . . . 2 
. . 2 2 2 2 2 2 2 2 2 . . . . 2 
. . . . 2 2 2 2 2 2 2 . . . . 2 
. . . . . . . 2 2 2 2 . . . . 2 
. . . . . . . 2 2 2 2 . . . . 2 
. . . . . . 2 2 2 2 2 . . . . 2 
. . . . . . 2 2 2 2 2 . . . . 2 
. . . . . 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 . . . . . 2 
2 2 2 2 2 2 2 2 2 . . . . . . 2 
2 2 2 2 2 2 2 2 . . . . . . . 2 
2 2 2 2 2 2 2 . . . . . . 2 2 2 
2 2 2 2 . . . . . . . . . 2 2 2 
. . . . . . . . . . . 2 2 2 2 2 
. . . . . . . 2 2 2 2 2 2 2 2 2 
. . . . . 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass3,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath8,myTiles.tile3,sprites.dungeon.floorLightMoss], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100009010101010101010101010a0a0a0a01090901010101010101010107020206010909090901010101010101070202060109090909090909010101010702020601090909090909090101010107020206010909090909090101010101070202060109090909090901010101010702020601090909090901010101010107020206010101010101010101010104020202060101010101010101010104020202020601010101010101010104020202020805010101010101010104020202020601010101010101040303020202020805010101030303030202020808080501010101010202020202080501010101010101010108080808050101010101010101010101`, img`
. 2 2 2 2 2 2 2 2 2 2 . . . . 2 
. . 2 2 2 2 2 2 2 2 2 . . . . 2 
. . . . 2 2 2 2 2 2 2 . . . . 2 
. . . . . . . 2 2 2 2 . . . . 2 
. . . . . . . 2 2 2 2 . . . . 2 
. . . . . . 2 2 2 2 2 . . . . 2 
. . . . . . 2 2 2 2 2 . . . . 2 
. . . . . 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 . . . . . 2 
2 2 2 2 2 2 2 2 2 . . . . . . 2 
2 2 2 2 2 2 2 2 . . . . . . . 2 
2 2 2 2 2 2 2 . . . . . . 2 2 2 
2 2 2 2 . . . . . . . . . 2 2 2 
. . . . . . . . . . . 2 2 2 2 2 
. . . . . . . 2 2 2 2 2 2 2 2 2 
. . . . . 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass3,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath8,myTiles.tile3,sprites.dungeon.floorLightMoss], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100009010101010101010101010a0a0a0a01090901010101010101010107020206010909090901010101010101070202060109090909090909010101010702020601090909090909090101010107020206010909090909090101010101070202060109090909090901010101010702020601090909090901010101010107020206010101010101010101010104020202060101010101010101010104020202020601010101010101010104020202020805010101010101010104020202020601010101010101040303020202020805010101030303030202020808080501010101010202020202080501010101010101010108080808050101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 . . . . . 2 
2 2 2 2 2 2 2 2 2 . . . . . . 2 
2 2 2 2 2 2 2 2 . . . . . . . 2 
2 2 2 2 2 2 2 . . . . . . 2 2 2 
2 2 2 2 . . . . . . . . . 2 2 2 
. . . . . . . . . . . 2 2 2 2 2 
. . . . . . . 2 2 2 2 2 2 2 2 2 
. . . . . 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass3,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath8,myTiles.tile3,sprites.dungeon.floorLightMoss], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`100010000b0a0a0a0a0a0a0a0a0a0a0a0a0a0a09040203030201010101010102030302080403020303020101010102030302030804030302030302010102030302030308040203030203030202030302030302080401020303020303030302030302010804010102030302030302030302010108040101010203030202030302010101080401010102030302020303020101010804010102030302030302030302010108040102030302030303030203030201080402030302030302020303020303020804030302030302010102030302030308040302030302010101010203030203080402030302010101010101020303020805060606060606060606060606060607`, img`
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. 2 . . . . . . . . . . . . 2 . 
. 2 2 . . . . . . . . . . 2 2 . 
. 2 2 2 . . . . . . . . 2 2 2 . 
. 2 2 2 . . . . . . . . 2 2 2 . 
. 2 2 . . . . . . . . . . 2 2 . 
. 2 . . . . . . . . . . . . 2 . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . 2 2 2 2 . . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,sprites.dungeon.floorLight2,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest], TileScale.Sixteen);
            case "level4":
            case "level4":return tiles.createTilemap(hex`1000100005030303030303030303030303030302060b0b0b0b0b0b0b0b0b0b0b0a0a0b01060b0a0b0a0a0a0b0a0b0a0b0a0a0b01090b0a0b0a0b0b0b0a0b0a0b0b0b0b01060b0b0b0a0b0a0a0a0b0a0b0a0a0b01060a0a0a0a0b0a0b0b0b0a0b0a0a0b01060b0b0b0b0b0a0b0a0a0a0b0a0a0b01060a0b0a0a0b0a0b0b0b0b0b0a0a0b01060a0b0a0a0b0a0a0a0a0a0a0a0a0a01060a0b0b0b0b0b0b0a0b0b0b0b0b0b01060a0a0a0a0a0a0b0a0a0a0b0a0a0b01060b0b0b0a0b0b0b0b0b0a0b0b0a0b01060b0a0b0a0b0a0a0a0b0a0a0b0a0b01060b0a0b0b0b0a0b0a0b0b0b0b0a0b01060b0a0a0a0a0a0b0b0b0a0a0a0a0b0a04070707070707070707070707070708`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . 2 2 . 2 
2 . 2 . 2 2 2 . 2 . 2 . 2 2 . 2 
. . 2 . 2 . . . 2 . 2 . . . . 2 
2 . . . 2 . 2 2 2 . 2 . 2 2 . 2 
2 2 2 2 2 . 2 . . . 2 . 2 2 . 2 
2 . . . . . 2 . 2 2 2 . 2 2 . 2 
2 2 . 2 2 . 2 . . . . . 2 2 . 2 
2 2 . 2 2 . 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . 2 . . . . . . 2 
2 2 2 2 2 2 2 . 2 2 2 . 2 2 . 2 
2 . . . 2 . . . . . 2 . . 2 . 2 
2 . 2 . 2 . 2 2 2 . 2 2 . 2 . 2 
2 . 2 . . . 2 . 2 . . . . 2 . 2 
2 . 2 2 2 2 2 . . . 2 2 2 2 . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.doorOpenWest,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundCenter], TileScale.Sixteen);
            case "level5":
            case "level5":return tiles.createTilemap(hex`1000100008070707070707070707070707070706020c0c0c0c0c0c0c0c0c0c0c0c0c0c05020c0a0a0a0a0a0a0a0a0a0a0a0a0a05020c0a0a0c0c0c0c0c0c0c0c0c0c0c0b020c0a0a0c0a0a0a0a0a0a0a0a0a0a05020c0a0a0c0a0a0a0a0a0a0a0a0a0a05020c0c0c0c0a0c0c0c0c0c0c0c0c0c05020a0a0a0c0a0c0a0a0a0a0a0c0a0a05020c0c0a0c0a0c0c0c0c0c0c0c0c0c05020a0c0a0c0a0a0a0a0a0a0a0c0a0a05020a0c0c0c0c0c0c0c0c0c0c0c0a0a05020a0c0a0c0a0a0a0a0a0a0a0d0d0c05020a0c0a0c0a0c0c0c0c0d0d0d0a0c05020a0c0a0c0a0c0a0a0a0a0a0d0a0c05020a0e0a0c0a0c0c0c0c0c0a0d0a0a0501030303030303030303030309030304`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 2 . . . . . . . . . . . . 
2 . 2 2 . 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 2 . 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . 2 . . . . . . . . . 2 
2 2 2 2 . 2 . 2 2 2 2 2 . 2 2 2 
2 . . 2 . 2 . . . . . . . . . 2 
2 2 . 2 . 2 2 2 2 2 2 2 . 2 2 2 
2 2 . . . . . . . . . . . 2 2 2 
2 2 . 2 . 2 2 2 2 2 2 2 . . . 2 
2 2 . 2 . 2 . . . . . . . 2 . 2 
2 2 . 2 . 2 . 2 2 2 2 2 . 2 . 2 
2 2 . 2 . 2 . . . . . 2 . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.doorOpenSouth,sprites.dungeon.floorLight0,sprites.dungeon.doorClosedEast,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.buttonOrange], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile1":return tile1;
            case "tile2":return tile2;
            case "tile3":return tile3;
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
