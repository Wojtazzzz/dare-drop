-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Streamer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "image" TEXT
);
INSERT INTO "new_Streamer" ("description", "id", "image", "name", "platform") SELECT "description", "id", "image", "name", "platform" FROM "Streamer";
DROP TABLE "Streamer";
ALTER TABLE "new_Streamer" RENAME TO "Streamer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
