

export default (code, req, errorMessage) => {
  return {
   message:errorMessage
  };
};

/**
* @swagger
* components:
*   schemas:
*     Result:
*       type: object
*       properties:
*         resultMessage:
*           $ref: '#/components/schemas/ResultMessage'
*         resultCode:
*           $ref: '#/components/schemas/ResultCode'
*     ResultMessage:
*       type: object
*       properties:
*         en:
*           type: string
*         tr:
*           type: string
*     ResultCode:
*       type: string
*/