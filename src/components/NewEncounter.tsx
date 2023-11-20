import { ChangeEvent, useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { IDoctor, getDoctors } from '../axios/doctors';
import { IEncounterCreate, createEncounter } from '../axios/encounter';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from './ui/command';
import { cn } from '../../lib/utils';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { useNavigate } from "react-router-dom";

type IProps = {
    patientId:string|undefined
    onEncounterCreated:()=>void
}

const NewEncounter = ({patientId,onEncounterCreated}:IProps) => {
    const navigate = useNavigate();

    const [title,setTitle] = useState("");
    const [doctors,setDoctors] = useState<IDoctor[]|null>(null);

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

    useEffect(()=>{
        getDoctors().then(docs => {
            if(docs == null) return;
            setDoctors(docs);
            setValue(docs[0].employeeId)
        })
    },[])

    const onCreateEncounter = async () => {
        if(doctors == null || patientId == undefined)
            return;

        const encounter:IEncounterCreate = {
            patientSocialNr: patientId,
            doctorEmployeeId: value,
            description: title
        }
        const res = await createEncounter(encounter)

        if(res) {
            onEncounterCreated()
        }
    }



    return(
    <Dialog>
      <DialogTrigger asChild>
      <button className='px-6 py-3 rounded-full bg-[#3260FC] text-white'>New encounter</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Encounter</DialogTitle>
          <DialogDescription>
            Create new encouter.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">

<div className="grid grid-cols-4 items-center gap-4">
    <Label htmlFor="username" className="text-right">
      Doctor
    </Label>
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
      <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {doctors != null &&
             doctors.find((framework) => framework.employeeId === value)?.lastname
            }
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search..." className="h-9" />
          <CommandEmpty>No doctors found.</CommandEmpty>
          <CommandGroup>
            {doctors != null &&
            doctors.map((doctor, i) => (
              <CommandItem
                key={doctor.employeeId}
                value={doctor.employeeId}
                onSelect={(currentValue) => {
                  setValue(currentValue)
                  setOpen(false)
                }}
              >
                {doctor.lastname + " " + doctor.surename}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === doctor.employeeId ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
</div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Title
            </Label>
            <Input id="username" className="col-span-3"  onChange={(e:ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}/>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={onCreateEncounter}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    )
}
export default NewEncounter;