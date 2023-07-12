/*
  Warnings:

  - You are about to drop the column `brandId` on the `cars` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `cars` table. All the data in the column will be lost.
  - You are about to drop the `carbrands` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `carcategories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `carimages` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `brand` to the `Cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Cars` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `carimages` DROP FOREIGN KEY `CarImages_carId_fkey`;

-- DropForeignKey
ALTER TABLE `cars` DROP FOREIGN KEY `Cars_brandId_fkey`;

-- DropForeignKey
ALTER TABLE `cars` DROP FOREIGN KEY `Cars_categoryId_fkey`;

-- AlterTable
ALTER TABLE `cars` DROP COLUMN `brandId`,
    DROP COLUMN `categoryId`,
    ADD COLUMN `brand` VARCHAR(191) NOT NULL,
    ADD COLUMN `category` VARCHAR(191) NOT NULL,
    ADD COLUMN `image` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `carbrands`;

-- DropTable
DROP TABLE `carcategories`;

-- DropTable
DROP TABLE `carimages`;
