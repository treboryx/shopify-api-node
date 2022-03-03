import {Session} from '../../../auth/session';
import {Context} from '../../../context';
import {ApiVersion} from '../../../base-types';

import {FulfillmentOrder} from '../../2022-01';

describe('FulfillmentOrder resource', () => {
  const domain = 'test-shop.myshopify.io';
  const headers = {'X-Shopify-Access-Token': 'this_is_a_test_token'};
  const test_session = new Session('1234', domain, '1234', true);
  test_session.accessToken = 'this_is_a_test_token';

  beforeEach(() => {
    Context.API_VERSION = ApiVersion.January22;
  });

  it('test_1', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    await FulfillmentOrder.all({
      session: test_session,
      order_id: 450789469,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-01/orders/450789469/fulfillment_orders.json',
      query: '',
      headers,
      data: null
    }).toMatchMadeHttpRequest();
  });

  it('test_2', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    await FulfillmentOrder.find({
      session: test_session,
      id: 1046000847,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-01/fulfillment_orders/1046000847.json',
      query: '',
      headers,
      data: null
    }).toMatchMadeHttpRequest();
  });

  it('test_3', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    const fulfillment_order = new FulfillmentOrder({session: test_session});
    fulfillment_order.id = 1046000848;
    await fulfillment_order.cancel({});

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2022-01/fulfillment_orders/1046000848/cancel.json',
      query: '',
      headers,
      data: null
    }).toMatchMadeHttpRequest();
  });

  it('test_4', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    const fulfillment_order = new FulfillmentOrder({session: test_session});
    fulfillment_order.id = 1046000851;
    await fulfillment_order.close({
      body: {fulfillment_order: {message: "Not enough inventory to complete this work."}},
    });

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2022-01/fulfillment_orders/1046000851/close.json',
      query: '',
      headers,
      data: { "fulfillment_order": {message: "Not enough inventory to complete this work."} }
    }).toMatchMadeHttpRequest();
  });

  it('test_5', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    const fulfillment_order = new FulfillmentOrder({session: test_session});
    fulfillment_order.id = 1046000852;
    await fulfillment_order.move({
      body: {fulfillment_order: {new_location_id: 655441491}},
    });

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2022-01/fulfillment_orders/1046000852/move.json',
      query: '',
      headers,
      data: { "fulfillment_order": {new_location_id: 655441491} }
    }).toMatchMadeHttpRequest();
  });

  it('test_6', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    const fulfillment_order = new FulfillmentOrder({session: test_session});
    fulfillment_order.id = 1046000854;
    await fulfillment_order.open({});

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2022-01/fulfillment_orders/1046000854/open.json',
      query: '',
      headers,
      data: null
    }).toMatchMadeHttpRequest();
  });

  it('test_7', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    const fulfillment_order = new FulfillmentOrder({session: test_session});
    fulfillment_order.id = 1046000855;
    await fulfillment_order.reschedule({
      body: {fulfillment_order: {new_fulfill_at: "2023-03-03"}},
    });

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2022-01/fulfillment_orders/1046000855/reschedule.json',
      query: '',
      headers,
      data: { "fulfillment_order": {new_fulfill_at: "2023-03-03"} }
    }).toMatchMadeHttpRequest();
  });

  it('test_8', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    const fulfillment_order = new FulfillmentOrder({session: test_session});
    fulfillment_order.id = 1046000856;
    await fulfillment_order.hold({
      body: {fulfillment_hold: {reason: "inventory_out_of_stock", reason_notes: "Not enough inventory to complete this work."}},
    });

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2022-01/fulfillment_orders/1046000856/hold.json',
      query: '',
      headers,
      data: {fulfillment_hold: {reason: "inventory_out_of_stock", reason_notes: "Not enough inventory to complete this work."}}
    }).toMatchMadeHttpRequest();
  });

  it('test_9', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    const fulfillment_order = new FulfillmentOrder({session: test_session});
    fulfillment_order.id = 1046000858;
    await fulfillment_order.release_hold({});

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2022-01/fulfillment_orders/1046000858/release_hold.json',
      query: '',
      headers,
      data: null
    }).toMatchMadeHttpRequest();
  });

});
