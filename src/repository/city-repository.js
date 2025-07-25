const { where } = require("sequelize");
const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("somthing went wrong in repostory layer");
      throw { error };
    }
  }

  async deleteCity({ cityId }) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
    } catch (error) {
      console.log("somthing went wrong in repostory layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      console.log("somthing went wrong in repostory layer ");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("somthing went wrong in repostory layer ");
      throw { error };
    }
  }
}

module.exports = CityRepository;
