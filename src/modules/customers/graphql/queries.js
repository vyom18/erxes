const customerFields = `
    _id
    name
    email
    phone
    isUser
    integrationId
    createdAt

    customFieldsData
    messengerData
    twitterData
    facebookData

    tagIds
    getTags {
      _id
      name
      colorCode
    }
`;

const customers = `
  query customers($params: CustomerListParams) {
    customers(params: $params) {
      ${customerFields}
    }
  }
`;

const customerCounts = `
  query customerCounts($params: CustomerListParams) {
    customerCounts(params: $params)
  }
`;

const customerDetail = `
  query customerDetail($_id: String!) {
    customerDetail(_id: $_id) {
      ${customerFields}
      companies {
        _id
        name
      }
      conversations {
        _id
        content
        tags {
          _id
          name
        }
      }
    }
  }
`;

const brands = `
  query brands {
    brands {
      _id
      name
    }
  }
`;

const tags = `
  query tags($type: String) {
    tags(type: $type) {
      _id
      name
      colorCode
    }
  }
`;

const fields = `
  query {
    fields(contentType: "customer") {
      _id
      type
      validation
      text
      description
      options
      isRequired
      order
    }
  }
`;

const customersListConfig = `
  query {
    fieldsDefaultColumnsConfig(contentType: "customer") {
      name
      label
      order
    }
  }
`;

const activityLogsCustomer = `
  query activityLogsCustomer($_id: String!) {
    activityLogsCustomer(_id: $_id) {
      date {
        year
        month
      }
      list {
        id
        action
        content
        createdAt
        by {
          _id
          type
          details {
            avatar
            fullName
          }
        }
      }
    }
  }
`;

export default {
  customers,
  customerCounts,
  customerDetail,
  brands,
  tags,
  fields,
  customersListConfig,
  activityLogsCustomer
};
