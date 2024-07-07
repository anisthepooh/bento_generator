'use client'
import Sidenav from './Sidenav';
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import ConfigForm from './ConfigForm'
import { EllipsisVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger } from '@/components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export function Dashboard() {
  const [background, setBackground] = useState('#B4D455');
  const [rows, setRows] = useState([]);
  const [bg, setBg] = useState(background)

  useEffect(() => {
    setRows(prevRows =>
      prevRows.map(row =>
        row.map(div => ({ ...div, element: createDiv(div.id) }))
      )
    );
  }, [background]);

  function createDiv(key) {
    
    return (
      <motion.div
        key={key}
        className="w-full h-full rounded-lg relative"
        initial={{ scale: 0 }}
        animate={{ scale: [1.2, 0.8, 1] }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{ background: bg }}
        >
        {bg}
        <span className="absolute right-2 top-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={'ghost'} size={'icon'}> 
                <EllipsisVertical />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <input type="color" onChange={(e) => setBg(e.target.value)} />
              <Button>Add text</Button>
            </PopoverContent>
          </Popover>
        </span>
      </motion.div>
    );
  }

  return (
    <div className="grid h-screen w-full pl-[56px]">
      <Sidenav />
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
          <h1 className="text-xl font-semibold">Playground</h1>
        </header>
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2">
          <div className="relative w-full flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
            <div className='grid gap-4 h-full'>
              <div className=' grid grid-cols-12 gap-4 grid-rows-3'>
                <div className='bg-blue-100 w-full h-full rounded-lg relative col-span-3'></div>
                <div className='bg-green-100 w-full h-full rounded-lg relative col-span-3'></div>
                <div className='bg-indigo-100 w-full h-full rounded-lg relative col-span-6'></div>
                <div className='bg-blue-100 w-full h-full rounded-lg relative col-span-3 row-span-2'></div>
                <div className='bg-green-100 w-full h-full rounded-lg relative col-span-6'></div>
                <div className='bg-indigo-100 w-full h-full rounded-lg relative col-span-3'></div>
                <div className='bg-blue-100 w-full h-full rounded-lg relative col-span-4'></div>
                <div className='bg-green-100 w-full h-full rounded-lg relative col-span-2'></div>
                <div className='grid grid-cols-2 grid-rows-2 gap-4 col-span-3'>
                  <div className='bg-indigo-100 w-full h-full rounded-lg relative col-span-1'></div>
                  <div className='bg-indigo-100 w-full h-full rounded-lg relative col-span-1'></div>
                  <div className='bg-indigo-100 w-full h-full rounded-lg relative col-span-1'></div>
                  <div className='bg-indigo-100 w-full h-full rounded-lg relative col-span-1'></div>

                </div>
              </div>

            </div>

            {/* <div className="grid gap-4 h-full">
              {rows.map((row, rowIndex) => (
                <div key={rowIndex} className={`grid gap-4 grid-cols-${row.length}`}>
                  <AnimatePresence>
                    {row.map(div => div.element)}
                  </AnimatePresence>
                </div>
              ))}
            </div> */}

          </div>
          <ConfigForm
          background={background}
          setBackground={setBackground}
          rows={rows}
          setRows={setRows}
          createDiv={createDiv}
          />
        </main>
      </div>
    </div>
  );
}
