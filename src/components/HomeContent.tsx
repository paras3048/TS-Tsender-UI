import AirdropForm from "@/components/AirdropForm"

export default function HomeContent(){
    return(
        <div>
            <AirdropForm isUnsafeMode={false} onModeChange={function (unsafe: boolean): void {
                throw new Error("Function not implemented.")
            } }/>
        </div>
    )
}