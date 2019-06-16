import React from 'react';

export const shared = {
  date: new Date()
};

export const SharedContext = React.createContext(shared);