/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navigation from './components/Navigation';
import HomeTab from './tabs/HomeTab';
import BolosTab from './tabs/BolosTab';
import DocesTab from './tabs/DocesTab';
import ContatoTab from './tabs/ContatoTab';
import EncomendaTab from './tabs/EncomendaTab';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');

  return (
    <div className="min-h-screen selection:bg-rose selection:text-white flex flex-col">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            {activeTab === 'inicio' && <HomeTab />}
            {activeTab === 'bolos' && <BolosTab />}
            {activeTab === 'doces' && <DocesTab />}
            {activeTab === 'contato' && <ContatoTab />}
            {activeTab === 'encomenda' && <EncomendaTab />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
