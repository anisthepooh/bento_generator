import React from 'react'
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { GradientPicker } from "@/components/ui/GradientPicker";

const ConfigForm = ({
  background,
  setBackground,
  rows,
  setRows,
  createDiv
}) => {

  const handleAddColumn = () => {
    const newId = rows.flat().length ? rows.flat()[rows.flat().length - 1].id + 1 : 1;
    setRows(prevRows =>
      prevRows.map(row => [...row, { id: newId, element: createDiv(newId) }])
    );
  };

  const handleAddRow = () => {
    const newId = rows.flat().length ? rows.flat()[rows.flat().length - 1].id + 1 : 1;
    const newRow = rows[0]
      ? Array(rows[0].length)
          .fill()
          .map((_, i) => ({ id: newId + i, element: createDiv(newId + i) }))
      : [{ id: newId, element: createDiv(newId) }];
    setRows(prevRows => [...prevRows, newRow]);
  };

  const handleRemoveLastColumn = () => {
    setRows(prevRows => prevRows.map(row => row.slice(0, -1)));
  };

  const handleRemoveLastRow = () => {
    setRows(prevRows => prevRows.slice(0, -1));
  };
  return (
      <div className="grid w-full items-start gap-6 overflow-auto p-4 pt-0 md:col-span-2">
        <fieldset className="grid gap-6 rounded-lg border p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">
            Config
          </legend>
          <div className="flex gap-12">
            <div>
              <Label htmlFor="add-column">Add Column</Label>
              <span className="flex items-center font-medium">
                <Button variant="outline" size="icon" onClick={handleRemoveLastColumn}>-</Button>
                <span className="mx-4">{rows.length > 0 ? rows[0].length : 0}</span>
                <Button variant="outline" size="icon" onClick={handleAddColumn}>+</Button>
              </span>
            </div>
            <div>
              <Label htmlFor="add-row">Add Row</Label>
              <span className="flex items-center font-medium">
                <Button variant="outline" size="icon" onClick={handleRemoveLastRow}>-</Button>
                <span className="mx-4">{rows.length}</span>
                <Button variant="outline" size="icon" onClick={handleAddRow}>+</Button>
              </span>
            </div>
            <div>
              <Label htmlFor="color-picker">Change color</Label>
              <br/>
              <GradientPicker id="color-picker" background={background} setBackground={setBackground} />
            </div>
            <div>
              <Label htmlFor="color-picker">Color pallets</Label>
              <br/>
              <button className='grid grid-cols-4 grid-rows-4 gap-x-2 gap-y-2 border border-slate-200 rounded p-2 h-content' variant={'ghost'}>
                <span className='bg-indigo-300 rounded h-4 w-4'>
                </span>
                <span className='bg-indigo-100 rounded h-4 w-4'>
                </span>
                <span className='bg-green-300 rounded h-4 w-4'>
                </span>
                <span className='bg-green-100 rounded h-4 w-4'>
                </span>
                <span className='bg-yellow-300 rounded h-4 w-4'>
                </span>
                <span className='bg-pink-100 rounded h-4 w-4'>
                </span>
                <span className='bg-pink-300 rounded h-4 w-4'>
                </span>
                <span className='bg-yellow-100 rounded h-4 w-4'>
                </span>

              </button>
            </div>
          </div>
        </fieldset>
      </div>
  )
}

export default ConfigForm