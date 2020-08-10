import { GoogleSpreadsheet } from 'google-spreadsheet';
import SheetConstants from '../constants/sheets';

const config = {
  type: 'service_account',
  project_id: 'vanikachava-1596877054164',
  private_key_id: '680ce29bf3c43445665d8f439bcdfe2e8627ea76',
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCj65BzTu+ujQCN\n0HFV45XaKCTUZqeJ2yTQGb0R+OwyJp1zKX9DdAZPkkXCEAPjoVDQfQNdeqWOkjr4\n9PcEUgbBMpnHcE90acHW21gwCxyJjbS8AIT8Zp2dQEqMre3q/kyCBaPuiTICfb8M\n+xigI+/vWgJKhlXyECf3ZQrHPB5XK6R0r8vNETifrxBOhfNCAZ4gPdTPaAFO3Eg1\n7OVgizdcu0ZrtFPeOFh/U7UFzgW0O9e4KKMW/58qKHDQkQ/48Ce3NRL26Jy88J4Z\naXwPyoUnWac8PWxPNdK8AAE5Cg9ifY0UWgCewkxXvNQ98GmXd8zaiuC4E628FF4e\nHOP4BiX5AgMBAAECggEAF2iZfU4FfmjWbmoY9UoF6VyYPdjXDiHEdQ9n57wjhtnq\n3DpN2UUlbZGW8qq003oC/3MK2vubzutlDo51BCHuowJl4YxRXG+J5fP2+Q1tKtuY\ntsxgMWc6FO3Md6CS/F8Kb/r8OSFQifiJIwJsttnK9uRktV3Pwjy6aGL+kgsszgfL\nvgOE6gLPF5++Ny796qzOsxR8/QTma/rpRcH++7uX/pYTdZx+A153NPDp0LTzgv0E\nZhviECVbdWkisId8vBB5S1bCgtEatPkVlNs+8qSbvWnxhlSc3YudjihfuyF20BF7\nCiklCr8o5K/d1Z7fwMeA1YoaW4MM+nrn+WmbxslZnQKBgQDfliANNASUwuvZl5LN\nKcB3uGYofD5IcNt17vroIXxMMF77yqInEQro7ZOubRsgjV+4wzsS65BJWP9qBPx4\njSVuuMj8+8BVh+4js9Pvn4O9eyCSsvk+OS3KpkaUTUbx/YThUMswECTf2MeoPnAW\nC6Dr+AB4hO490uqsaeIbdlGOwwKBgQC7rxGlxhugfG22J+nYjp63MKNmJk55FRxw\n/YWDUABmxzS1wOJfIqvD43qHDuYmOiEmcrfkJMbLcVpChEry9Sea1AXl2cv5P3bg\n+TcFUOoRqbcSSSV09EqiXSxXBkMhSpg/WFPj2BudWmuR/EETP305iTTSO15RlrkY\naDngGg9kkwKBgCzc1KWRkHHBAs3wSfZ8sC/VgjoRY/XpHz/0qce2IFixQ/3F1O99\nzfCa6w0Ou2i2tUQ/eDT9qz/saaN+SKJvv9kNntaUNS10TuY/CQGFwktcz1ZgLv67\nPmLxJixPrTKVKfqD2aFVO/DmcHljvd3Oi4WNh5qnIZ6qGYhq3oGgJhE9AoGBAJ0Y\nhOUFVcqXXB3EevBRMHiVta+jELw49318N20aYbulsnEP6mtHUg69Maoqxmno7iaI\nj3PfdKaFUs+qfDGxEl1+axFhpGIUxSS6dVt1xvbR3/LmVvv2HyKYaqzNCROspJMh\nE9b65OJo9PFU/ANoeSDXv+bY2rHgPz42v3rdVVURAoGBALxBtobw8PiMQJP8t2kV\nTjmAHRLLETxDU9iYmGgDZaUcRUpy4kLsxcwfTNJpldyhNOfNG6rwL/i8nwcVW7ES\nfr+SoIb6D0O8VLoB1nstjivRPN7SxycVAVFV/kmsb7jnrUsvj874qC2Up4G+MSqV\nGkYKcZLQfpJO152aiw8PWbK0\n-----END PRIVATE KEY-----\n',
  client_email: 'manager@vanikachava-1596877054164.iam.gserviceaccount.com',
  client_id: '107070092015972782655',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/manager%40vanikachava-1596877054164.iam.gserviceaccount.com',
};

const doc = new GoogleSpreadsheet(SheetConstants.SHEET_ID);

doc.useServiceAccountAuth(config);
// doc.loadInfo();

export default doc;
