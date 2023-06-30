import { Request, Response } from "express";
import httpCodes from 'http-status-codes'
import axios from 'axios'
import *  as Joi from "joi";
import MESSAGE from '../config/message'
import CONFIG from '../config/application.config'

class CountryController {
  static getAllContries = async (req: Request, res: Response) => {

    axios.get(`${CONFIG.COUNTRY_BASE_API}/countries`)
      .then(async (response: any) => {
        return res.status(httpCodes.OK).json({
          code: httpCodes.OK,
          data: response.data.countries,
          message: MESSAGE.COUNTRIES_FETCH_SUCCESS
        })

      })
      .catch((err) => {
        return res.status(httpCodes.INTERNAL_SERVER_ERROR).json({
          code: httpCodes.INTERNAL_SERVER_ERROR,
          message: MESSAGE.INTERNAL_SERVER_ERROR
        })
      })
  };

  static getAllContriesByName = async (req: Request, res: Response) => {
    try {
      const countryName: string = req.params.countryName
      const endDate: string = req.params.endDate

      /* Validations */
      const inviteeSchema = Joi.object().keys({
        countryName: Joi.string().required().messages({
          'string.empty': MESSAGE.COUNTRI_NAME_REQUIRED
        }),
        endDate: Joi.string().required().messages({
          'string.empty': MESSAGE.COUNTRI_POPULATION_END_DATE_REQUIRED,
        })
      });

      const validateInp = inviteeSchema.validate({ countryName, endDate });
      const { error } = validateInp;
      const valid = error == null;

      if (!valid) {
        const { details } = error
        const message = details.map((i) => i.message).join(',')
        return res.status(httpCodes.BAD_REQUEST).json({
          code: httpCodes.BAD_REQUEST,
          message: message,
        });
      }

      /* ********** Third Party API CALL ********** */
      axios.get(`${CONFIG.COUNTRY_BASE_API}/population/${countryName}/${endDate}`)
        .then(async (response: any) => {
          if (response?.data) {
            return res.status(httpCodes.OK).json({
              code: httpCodes.OK,
              data: response.data,
              message: MESSAGE.COUNTRIES_FETCH_SUCCESS
            })
          } else {
            return res.status(httpCodes.BAD_REQUEST).json({
              code: httpCodes.BAD_REQUEST,
              message: MESSAGE.COUNTRI_NOT_FOUND
            })
          }
        })
        .catch((err) => {
          return res.status(httpCodes.INTERNAL_SERVER_ERROR).json({
            code: httpCodes.INTERNAL_SERVER_ERROR,
            message: MESSAGE.INTERNAL_SERVER_ERROR
          })
        })
    } catch (err) {
      return res.status(httpCodes.INTERNAL_SERVER_ERROR).json({
        code: httpCodes.INTERNAL_SERVER_ERROR,
        message: MESSAGE.INTERNAL_SERVER_ERROR
      })
    }
  };

}

export default CountryController;
