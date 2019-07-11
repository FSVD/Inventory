-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema inventory
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `inventory` ;

-- -----------------------------------------------------
-- Schema inventory
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `inventory` DEFAULT CHARACTER SET utf8 ;
USE `inventory` ;

-- -----------------------------------------------------
-- Table `inventory`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `inventory`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `name` VARCHAR(45) NOT NULL COMMENT '',
  `stock` INT NOT NULL COMMENT '',
  `price` FLOAT NOT NULL COMMENT '',
  `vendor` VARCHAR(45) NOT NULL COMMENT '',
  PRIMARY KEY (`id`)  COMMENT '')
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `inventory`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `inventory`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `username` VARCHAR(45) NOT NULL COMMENT '',
  `password` VARCHAR(45) NOT NULL COMMENT '',
  PRIMARY KEY (`id`)  COMMENT '')
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

INSERT INTO `inventory`.`user` (`id`, `username`, `password`) VALUES ('1', 'Testuser', 'userpwd');
INSERT INTO `inventory`.`product` (`id`, `name`, `stock`, `price`, `vendor`) VALUES ('1', 'QCY T2 Headphones Bluetooth 5.0', '10', '35.90', 'QCY');
INSERT INTO `inventory`.`product` (`id`, `name`, `stock`, `price`, `vendor`) VALUES ('2', 'TeckNet Classic 2.4G Wireless Mouse', '20', '11.79', 'TeckNet');
INSERT INTO `inventory`.`product` (`id`, `name`, `stock`, `price`, `vendor`) VALUES ('3', 'Apple iPhone 8, 64 gb', '5', '614.90', 'Apple');
