/*------------------------------------------------------------------------------
   About      : Represents a connection for client & server.
   
   Created on : Sun Jun 25 2017
   Author     : Raghvendra Varma
   
   Copyright (c) 2017 Mubble Networks Private Limited. All rights reserved.
------------------------------------------------------------------------------*/

import { Mubble }               from '../'
import { Protocol, 
         XmnProvider 
       }                        from './xmn-core'
import { CustomData }           from './custom-data'

export interface ConnectionInfo {

  // Client Public identifier
  shortName       : string    // max four character name (only alpha-numeric)

  // Connection attributes
  protocol        : Protocol
  host            : string    // host name of the server
  port            : number    // port of the server
  url             : string    // /api/getTopics Or connectUrl (for WS)
  headers         : Mubble.uObject<any> // empty for client
  ip              : string    // ip address or host name of the client socket

  // Server fields. Not used by client
  msOffset        : number    // this is inferred by the server based on client's now field. Api/event need not use this
  lastEventTs     : number    // Must be set before an event is processed on server
  lastRequestTs   : number

  protocolVersion : string        // Example: 'v2'

  // provider for this connection (WebSocket, Http etc.)
  provider        : XmnProvider   // The protocol provider keeps it's custom data here

  customData      : CustomData
}
