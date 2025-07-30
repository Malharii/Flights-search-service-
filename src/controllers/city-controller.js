const { CityService } = require("../services/index");

const cityService = new CityService();
const create = async (req, res) => {
  try {
    const data = {
      name: req.body.name?.trim().toLowerCase(), // 🔥 sanitize here too
    };
    const response = await cityService.createCity(data);
    return res.status(201).json({
      data: response,
      success: true,
      message: "City created successfully",
      err: {},
    });
  } catch (error) {
    console.log("❌ something went wrong at controller layer");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city ",
      err: { error },
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "sucessfully deleted a city ",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the  city ",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);
    return res.status(201).json({
      data: response,
      success: true,
      message: "sucessfully get a city ",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to featched  the  city ",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body.data);
    return res.status(201).json({
      data: response,
      success: true,
      message: "sucessfully update a city ",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update  the  city ",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const cities = await cityService.getAllCities(req.query);
    return res.status(201).json({
      data: cities,
      success: true,
      message: "sucessfully pethch all cities ",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update  the  city ",
      err: error,
    });
  }
};
module.exports = {
  create,
  update,
  get,
  destroy,
  getAll,
};
